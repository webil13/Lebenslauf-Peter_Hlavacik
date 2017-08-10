/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#64ffda"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#64ffda"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
        "width": 300,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "opacity_min": 0.3,
        "sync": true
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "size_min": 0.3,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 90,
      "color": "#90caf9",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 170,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 130,
        "size":7,
        "duration": 3,
        "opacity": 3,
        "speed": 5
      },
      "repulse": {
        "distance": 170,
        "duration": 0.3
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
