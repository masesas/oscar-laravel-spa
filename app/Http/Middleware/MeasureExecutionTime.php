<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MeasureExecutionTime
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->isJson()) {
            $response = $next($request);

            $executionTime = microtime(true) - LARAVEL_START;

            $content = json_decode($response->getContent(), true) + [
                'execution_time' => $executionTime,
            ];

            $response->setContent(json_encode($content));

            return $response;
        }

        return $next($request);
    }
}
