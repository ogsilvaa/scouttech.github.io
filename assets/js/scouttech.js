﻿var APIS = {
    Miembros: "https://api.github.com/orgs/ScoutTech/members",
    Repositorios: "https://api.github.com/orgs/ScoutTech/repos"
};

var MENU = [
    { href: "index.html", text: "Principal" },
    { href: "https://scouttech.github.io/seeonee", text: "Seeonee" }
];

var HEADER = { nombre: "Scout Tech", sufijo: " software", link: "index.html" };

$(document).ready(function () {
    $.ajax(APIS.Miembros)
        .done(function (data) {
            data.forEach(function (x) {
                $("#member").append(
                    $("<li>").append(
                        $("<a>", {
                            href: x.html_url,
                            target: "_blank"
                        }).prepend(
                            $("<img>", {
                                src: x.avatar_url
                            })
                        ).append(
                            $("<span>", {
                                text: x.login
                            })
                        )
                    )
                );
            });
        });
    $.ajax(APIS.Repositorios)
        .done(function (data) {
            data.forEach(function (x) {
                $("#repos").append(
                    $("<li>").append(
                            $("<a>", {
                                class: "fa fa-caret-right fa-5x",
                                href: "issues.html?repo=" + x.name,
                                alt: "Ver Issues"
                            })
                        ).append(
                        $("<a>", {
                            href: x.html_url,
                            target: "_blank",
                            alt:"Ver Repositorio"
                        }).append(
                            $("<h3>", {
                                text: x.name,
                            })
                        ).append(
                            $("<span>", {
                                text: x.forks_count,
                                class: "fa fa-code-fork",
                            })
                        ).append(
                            $("<span>", {
                                text: x.stargazers_count,
                                class: "fa fa-star-o"
                            })
                        ).append(
                            $("<span>", {
                                text: x.description
                            })
                        )
                    )
                );
            });
        });
    MENU.forEach(function (x) {
        $("#menu").find(".links").append(
            $("<li>").append(
                $("<a>", {
                    href: x.href,
                    text: x.text
                })
            )
        );
    });
    $("#header").find(".logo").append(
        $("<a>", { href: HEADER.link, text: HEADER.nombre })
        .append($("<span>", { text: HEADER.sufijo })
        )
    );
    $("head").find("title").text(HEADER.nombre + HEADER.sufijo);
});