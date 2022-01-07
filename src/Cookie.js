"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookies = void 0;
var Cookies = /** @class */ (function () {
    function Cookies() {
    }
    Cookies.prototype.SetCookie = function (name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };
    Cookies.prototype.GetCookie = function (name) {
        if (name === void 0) { name = "user_email"; }
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    Cookies.prototype.GetID = function (id) {
        if (id === void 0) { id = "user_id"; }
        var idEQ = id + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(idEQ) == 0)
                return c.substring(idEQ.length, c.length);
        }
        return null;
    };
    Cookies.prototype.GetRole = function (role) {
        if (role === void 0) { role = "user_role"; }
        var roleEQ = role + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(roleEQ) == 0)
                return c.substring(roleEQ.length, c.length);
        }
        return null;
    };
    Cookies.prototype.CheckLogin = function (arr, email, password) {
        var boo = false;
        arr.forEach(function (item) {
            if (item.user === email && item.pass === password) {
                boo = true;
            }
        });
        return boo;
    };
    Cookies.prototype.SetID = function (arr, email, password) {
        var boo = 0;
        arr.forEach(function (item) {
            if (item.user === email && item.pass === password) {
                boo = item.id;
            }
        });
        return boo;
    };
    Cookies.prototype.ClearCookie = function (name, id, role) {
        if (name === void 0) { name = "user_email"; }
        if (id === void 0) { id = "user_id"; }
        if (role === void 0) { role = "user_role"; }
        console.log("name in ClearCookie => " + name);
        console.log("id in ClearCookie => " + id);
        console.log("role in ClearCookie => " + role);
        var date = new Date();
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
        document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
        document.cookie = id + "=; expires=" + date.toUTCString() + "; path=/";
        document.cookie = role + "=; expires=" + date.toUTCString() + "; path=/";
    };
    return Cookies;
}());
exports.Cookies = Cookies;
