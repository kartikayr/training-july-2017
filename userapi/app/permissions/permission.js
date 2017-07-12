
var adminRole = {
    name: 'admin',
    resources: [
        '/users',
        '/users/:username',
    ],
    permissions: '*'
};
var userRole = {
    name: 'user',
    resources: [
        '/users',
    ],
    permissions: ['get', 'post']
};
var allRoles = [
    adminRole,
    userRole
];

module.exports = allRoles;
