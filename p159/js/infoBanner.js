AFRAME.registerComponent("info-banner", {
    schema: {
        itemId: { default: "", type: "string" },
    },
    update: function () {
        this.createBanner();
    },
    createBanner: function () {
        postersInfo = {

            "thor": {
                title: "Thor",
                banner_url: "./assets/posters/thor.jpeg",
                released_year: "1966",
                description:"Thor and Hercules are fighting over Jane Foster, both mens egos preventing an end to the fight, however the two appear to be evenly matched."
            },
            "iron_man": {
                title: "Iron-Man",
                banner_url: "./assets/posters/iron_man.jpeg",
                released_year: "1968",
                description:"It's the big Premiere! The Invincible Iron Man versus the menaces of Whiplash and AIM. Featuring Nick Fury and SHIELD."
            },

            "superman": {
                title: "Superman",
                banner_url: "./assets/posters/super_man.jpeg",
                released_year: "1986",
                description:"Whatever Happened to the Man of Tomorrow? is a 1986 American comic book story published by DC Comics, featuring the superhero Superman."
            },
            "spider-man": {
                title: "Spider-Man",
                banner_url: "./assets/posters/spider_man.webp",
                released_year: "2022",
                description:"Benjamin Reilly, also known as the Scarlet Spider, is a fictional superhero appearing in American comic books published by Marvel Comics."
            },
        };
        const { itemId } = this.data;

        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `${itemId}-banner`);

        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 0.9,
            height: 1,
        });

        entityEl.setAttribute("material", { color: "#000" });
        entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

        const item = postersInfo[itemId];

        const imageEl = this.createImageEl(item);
        const titleEl = this.createTitleEl(item);
        const descriptionEl = this.createDescriptionEl(item);

        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);

        fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 0.85,
            height: 0.4,
        });
        entityEl.setAttribute("material", { src: item.banner_url });
        entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
        return entityEl;
    },
    createTitleEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
            shader: "msdf",
            anchor: "left",
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width: 1.2,
            height: 2,
            color: "#fff",
            value: `${item.title} (${item.released_year})`,
        });
        entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
        return entityEl;
    },
    createDescriptionEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
            shader: "msdf",
            anchor: "left",
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width: 0.75,
            height: 2,
            color: "#fff",
            wrapCount: "40",
            value: item.description,
        });
        entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
        return entityEl;
    },
});