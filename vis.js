document.addEventListener('DOMContentLoaded', () => {
    const ns = "http://www.w3.org/2000/svg";

    const drawSoccerBall = () => {
        const container = document.getElementById('soccer-ball-container');
        const size = 200;
        const radius = 60;

        const svg = document.createElementNS(ns, "svg");
        svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
        svg.setAttribute("width", "50%");
        svg.setAttribute("height", "50%");

        const ballGroup = document.createElementNS(ns, "g");
        ballGroup.setAttribute(
            "transform",
            `translate(${size / 2}, ${size / 2})`
        );

        const ball = document.createElementNS(ns, "circle");
        ball.setAttribute("r", radius);
        ball.setAttribute("fill", "#ffffff");
        ball.setAttribute("stroke", "#1f2933");
        ball.setAttribute("stroke-width", "4");
        ballGroup.appendChild(ball);

        const gradient = document.createElementNS(ns, "radialGradient");
        gradient.setAttribute("id", "ballShade");
        gradient.innerHTML = `
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="70%" stop-color="#f1f5f9"/>
            <stop offset="100%" stop-color="#cbd5e1"/>
        `;
        const defs = document.createElementNS(ns, "defs");
        defs.appendChild(gradient);
        svg.appendChild(defs);
        ball.setAttribute("fill", "url(#ballShade)");

        const panels = document.createElementNS(ns, "g");

        const createPentagon = (x, y, r) => {
            const points = [];
            for (let i = 0; i < 5; i++) {
                const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
                points.push(
                    `${x + r * Math.cos(angle)},${y + r * Math.sin(angle)}`
                );
            }
            const poly = document.createElementNS(ns, "polygon");
            poly.setAttribute("points", points.join(" "));
            poly.setAttribute("fill", "#111827");
            poly.setAttribute("stroke", "#0f172a");
            poly.setAttribute("stroke-width", "1");
            return poly;
        };

        panels.appendChild(createPentagon(0, 0, 18));

        for (let i = 0; i < 5; i++) {
            const angle = (Math.PI * 2 / 5) * i;
            panels.appendChild(createPentagon(
                Math.cos(angle) * 35,
                Math.sin(angle) * 35,
                14
            ));
        }

        ballGroup.appendChild(panels);
        svg.appendChild(ballGroup);
        container.appendChild(svg);

        let rotation = 0;
        function animate() {
            rotation += 0.8;
            ballGroup.setAttribute(
                "transform",
                `translate(${size / 2}, ${size / 2}) rotate(${rotation})`
            );
            requestAnimationFrame(animate);
        }
        animate();
    };

    const drawManHouse = () => {
        const container = document.getElementById('crest-container');
        const svg = document.createElementNS(ns, "svg");
        svg.setAttribute("viewBox", "0 0 500 300");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");

        const sky = document.createElementNS(ns, "rect");
        sky.setAttribute("width", "500");
        sky.setAttribute("height", "300");
        sky.setAttribute("fill", "#e0f2fe");
        svg.appendChild(sky);

        const sun = document.createElementNS(ns, "circle");
        sun.setAttribute("cx", "420");
        sun.setAttribute("cy", "60");
        sun.setAttribute("r", "30");
        sun.setAttribute("fill", "#fde047");
        svg.appendChild(sun);

        // Grass
        const grass = document.createElementNS(ns, "rect");
        grass.setAttribute("y", "220");
        grass.setAttribute("width", "500");
        grass.setAttribute("height", "80");
        grass.setAttribute("fill", "#86efac");
        svg.appendChild(grass);

        const house = document.createElementNS(ns, "rect");
        house.setAttribute("x", "80");
        house.setAttribute("y", "140");
        house.setAttribute("width", "160");
        house.setAttribute("height", "100");
        house.setAttribute("fill", "#e5e7eb");
        house.setAttribute("stroke", "#64748b");
        svg.appendChild(house);

        const roof = document.createElementNS(ns, "polygon");
        roof.setAttribute("points", "60,140 160,80 260,140");
        roof.setAttribute("fill", "#dc2626");
        svg.appendChild(roof);

        const door = document.createElementNS(ns, "rect");
        door.setAttribute("x", "145");
        door.setAttribute("y", "170");
        door.setAttribute("width", "30");
        door.setAttribute("height", "70");
        door.setAttribute("fill", "#92400e");
        svg.appendChild(door);

        const body = document.createElementNS(ns, "rect");
        body.setAttribute("x", "320");
        body.setAttribute("y", "170");
        body.setAttribute("width", "30");
        body.setAttribute("height", "50");
        body.setAttribute("fill", "#2563eb");
        svg.appendChild(body);


        const head = document.createElementNS(ns, "circle");
        head.setAttribute("cx", "335");
        head.setAttribute("cy", "150");
        head.setAttribute("r", "18");
        head.setAttribute("fill", "#fde68a");
        svg.appendChild(head);

        const eyes = document.createElementNS(ns, "circle");
        eyes.setAttribute("cx", "330");
        eyes.setAttribute("cy", "145");
        eyes.setAttribute("r", "3");
        eyes.setAttribute("fill", "#1f2937");
        svg.appendChild(eyes);

        const eyes2 = document.createElementNS(ns, "circle");
        eyes2.setAttribute("cx", "340");
        eyes2.setAttribute("cy", "145");
        eyes2.setAttribute("r", "3");
        eyes2.setAttribute("fill", "#1f2937");
        svg.appendChild(eyes2);

        const smile = document.createElementNS(ns, "path");
        smile.setAttribute("d", "M325 155 Q335 165 345 155");
        smile.setAttribute("stroke", "#1f2937");
        smile.setAttribute("stroke-width", "2");
        smile.setAttribute("fill", "none");
        svg.appendChild(smile);

        const armLeft = document.createElementNS(ns, "line");
        armLeft.setAttribute("x1", "320");
        armLeft.setAttribute("y1", "185");
        armLeft.setAttribute("x2", "300");
        armLeft.setAttribute("y2", "195");
        armLeft.setAttribute("stroke", "#2563eb");
        armLeft.setAttribute("stroke-width", "4");

        const armRight = document.createElementNS(ns, "line");
        armRight.setAttribute("x1", "350");
        armRight.setAttribute("y1", "185");
        armRight.setAttribute("x2", "370");
        armRight.setAttribute("y2", "170");
        armRight.setAttribute("stroke", "#2563eb");
        armRight.setAttribute("stroke-width", "4");

        const legRight = document.createElementNS(ns, "line");
        legRight.setAttribute("x1", "325");
        legRight.setAttribute("y1", "220");
        legRight.setAttribute("x2", "325");
        legRight.setAttribute("y2", "240");
        legRight.setAttribute("stroke", "#2563eb");
        legRight.setAttribute("stroke-width", "4");
        
        const legLeft = document.createElementNS(ns, "line");
        legLeft.setAttribute("x1", "345");
        legLeft.setAttribute("y1", "220");
        legLeft.setAttribute("x2", "345");
        legLeft.setAttribute("y2", "240");
        legLeft.setAttribute("stroke", "#2563eb");
        legLeft.setAttribute("stroke-width", "4");

        

        svg.appendChild(armLeft);
        svg.appendChild(armRight);

        svg.appendChild(legRight);
        svg.appendChild(legLeft);

        container.appendChild(svg);
    };

    drawSoccerBall();
    drawManHouse();
});
