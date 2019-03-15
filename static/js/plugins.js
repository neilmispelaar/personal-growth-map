// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

new Chart(document.getElementById("strategic-design-skills"), {
  type: 'radar',
  data: {	
    labels: ["Facilitation", "Design thinking", "Presenting", "Communication", "UX strategy and planning", "Negotiation"],
    datasets: [
      { 
        label: "Current State",
        fill: true,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [0,2.0,3.0,2.0,2.0,2.0]
      }, {
        label: "Desired State",
        fill: true,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        data: [3,2,2,3,3,2]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Other Skills'
    }
  }
});


new Chart(document.getElementById("design-skills"), {
  type: 'radar',
  data: {	
    labels: ["Facilitation", "Design thinking", "Presenting", "Communication", "UX strategy and planning", "Negotiation"],
    datasets: [
      { 
        label: "Current State",
        fill: true,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [0,2.0,3.0,2.0,2.0,2.0]
      }, {
        label: "Desired State",
        fill: true,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        data: [3,2,2,3,3,2]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Other Skills'
    }
  }
});



new Chart(document.getElementById("development-skills"), {
  type: 'radar',
  data: {	
    labels: ["Facilitation", "Design thinking", "Presenting", "Communication", "UX strategy and planning", "Negotiation"],
    datasets: [
      { 
        label: "Current State",
        fill: true,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [0,2.0,3.0,2.0,2.0,2.0]
      }, {
        label: "Desired State",
        fill: true,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        data: [3,2,2,3,3,2]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Other Skills'
    }
  }
});



new Chart(document.getElementById("other-skills"), {
  type: 'radar',
  data: {	
    labels: ["Facilitation", "Design thinking", "Presenting", "Communication", "UX strategy and planning", "Negotiation"],
    datasets: [
      { 
        label: "Current State",
        fill: true,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [0,2.0,3.0,2.0,2.0,2.0]
      }, {
        label: "Desired State",
        fill: true,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        data: [3,2,2,3,3,2]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Other Skills'
    }
  }
});
