/**
 * Admin
 */
Security.defineMethod("accIfAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['admin'], 'Acc');
    }
});

/**
 * General
 */
Security.defineMethod("accIfGeneral", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['general'], 'Acc');
    }
});

/**
 * Reporter
 */
Security.defineMethod("accIfReporter", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['reporter'], 'Acc');
    }
});
