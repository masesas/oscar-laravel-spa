<?php

use PhpCsFixer\Config;
use PhpCsFixer\Finder;

$rules = [
    '@PSR2'                                       => true,
    'strict_param'                                => false,
    'array_syntax'                                => ['syntax' => 'short'],
    'blank_line_after_namespace'                  => true,
    'blank_line_after_opening_tag'                => true,
    'blank_line_before_statement'                 => true,
    'braces'                                      => true,
    // 'braces' => [
    //     'position_after_anonymous_constructs'         => 'next',
    //     'position_after_control_structures'           => 'next',
    // ],
    'cast_spaces'                                 => true,
    'array_indentation'                           => true,
    'ordered_imports'                             => true,
    'elseif'                                      => true,
    'encoding'                                    => true,
    'full_opening_tag'                            => true,
    'function_declaration'                        => true,
    'function_typehint_space'                     => true,
    'include'                                     => true,
    'indentation_type'                            => true,
    'line_ending'                                 => true,
    'constant_case'                               => true,
    'lowercase_keywords'                          => true,
    'method_argument_space'                       => true,
    'phpdoc_separation'                           => true,
    'no_blank_lines_after_class_opening'          => true,
    'no_blank_lines_after_phpdoc'                 => true,
    'no_closing_tag'                              => true,
    'no_empty_statement'                          => true,
    'no_leading_import_slash'                     => true,
    'no_leading_namespace_whitespace'             => true,
    'no_multiline_whitespace_around_double_arrow' => true,
    'multiline_whitespace_before_semicolons'      => true,
    'no_singleline_whitespace_before_semicolons'  => true,
    'no_spaces_after_function_name'               => true,
    'no_spaces_inside_parenthesis'                => true,
    'no_trailing_comma_in_list_call'              => true,
    'no_trailing_comma_in_singleline_array'       => true,
    'no_trailing_whitespace'                      => true,
    'no_unused_imports'                           => true,
    'no_whitespace_in_blank_line'                 => true,
    'not_operator_with_successor_space'           => true,
    'object_operator_without_whitespace'          => true,
    'phpdoc_align'                                => true,
    'phpdoc_indent'                               => true,
    'general_phpdoc_tag_rename'                   => true,
    'phpdoc_no_access'                            => true,
    'phpdoc_no_package'                           => true,
    'phpdoc_order'                                => true,
    'phpdoc_scalar'                               => true,
    'phpdoc_summary'                              => true,
    'phpdoc_to_comment'                           => true,
    'phpdoc_trim'                                 => true,
    'phpdoc_var_without_name'                     => true,
    'self_accessor'                               => true,
    'simplified_null_return'                      => false,
    'single_blank_line_at_eof'                    => true,
    'single_blank_line_before_namespace'          => true,
    'single_import_per_statement'                 => true,
    'single_line_after_imports'                   => true,
    'single_quote'                                => true,
    'standardize_not_equals'                      => true,
    'ternary_operator_spaces'                     => true,
    'trim_array_spaces'                           => true,
    'unary_operator_spaces'                       => true,
    'visibility_required'                         => true,

    'binary_operator_spaces'                      => [
        'operators' => [
            '=>' => 'align_single_space_minimal',
            '='  => 'align_single_space_minimal',
        ]
    ],
];


$finder = Finder::create()
    ->in(__DIR__);

$config = new Config();

return $config->setFinder($finder)
    ->setRules($rules)->setUsingCache(true)
    ->setRiskyAllowed(true);
