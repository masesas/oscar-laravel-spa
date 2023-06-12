import {
    mdiAccountCircle,
    mdiMonitor,
    mdiGithub,
    mdiAccountKey,
    mdiAccountEye,
    mdiAccountGroup,
    mdiPalette,
    mdiAlphaBBox,
    mdiAlphaFCircle
} from '@mdi/js'

export default [
    {
        route: 'dashboard',
        icon: mdiMonitor,
        label: 'Dashboard'
    },
    {
        route: 'permission.index',
        icon: mdiAccountKey,
        label: 'Permissions'
    },
    {
        route: 'role.index',
        icon: mdiAccountEye,
        label: 'Roles'
    },
    {
        route: 'user.index',
        icon: mdiAccountGroup,
        label: 'Users'
    },
    {
        icon: mdiPalette,
        label: 'Components',
        isDropdownList: true,
        children: [
            {
                icon: mdiAlphaBBox,
                label: 'Button'
            },
            {
                icon: mdiAlphaFCircle,
                label: 'Forms'
            },
        ]
    },
]
