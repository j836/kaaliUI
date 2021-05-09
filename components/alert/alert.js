// ALert Danger
document.querySelector("#btn-danger-close").addEventListener("click", () => {
  let alertbox = document.querySelector(".alert-danger");

  console.log("lal bhadak");
  alertbox.classList.add("fade-out-top");
  // alertbox.style.display = "none";
});

// Copy content for Danger Alert

if (document.querySelector("#clip-alert-danger") != null) {
  document.querySelector("#clip-alert-danger").addEventListener("click", () => {
    console.log("called");
    navigator.clipboard.writeText(
      '<div class="alert-content alert-danger">' +
        "\n\t" +
        " This is a danger alert with dismissal button." +
        "\n" +
        '\t <span class="btn-dismiss" id="btn-danger-close">&times;</span>' +
        "\n"
    );

    let tooltip = document.querySelector("#danger-tooltip");
    console.log(tooltip, "ye apna tooltip");
    tooltip.innerHTML = "Copied";
  });
  content.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#danger-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}

// ----------------------------------------------------------------
// Success Alert

// Close Success Alert
document.querySelector("#btn-success-close").addEventListener("click", () => {
  console.log("green alert close");
  document.querySelector(".alert-success").classList.add("fade-out-top");
});

// Copy Content of Success Alert
if (document.querySelector("#clip-alert-success") != null) {
  document
    .querySelector("#clip-alert-success")
    .addEventListener("click", () => {
      console.log("called");
      navigator.clipboard.writeText(
        '<div class="alert-content alert-success">' +
          "\n\t" +
          " This is a success alert with dismissal button." +
          "\n" +
          "</div>"
      );

      let tooltip = document.querySelector("#success-tooltip");
      console.log(tooltip, "ye apna tooltip");
      tooltip.innerHTML = "Copied";
    });
  document
    .querySelector("#clip-alert-success")
    .addEventListener("mouseout", () => {
      let tooltip = document.querySelector("#success-tooltip");
      tooltip.innerHTML = "Copy to Clipboard";
    });
}

// ----------------------------------------------------------------
// Info Alert

document.querySelector("#btn-info-close").addEventListener("click", () => {
  console.log("blue called");
  document.querySelector(".alert-info").classList.add("fade-out-top");
});

// Copy Content of info Alert
if (document.querySelector("#clip-alert-info") != null) {
  document.querySelector("#clip-alert-info").addEventListener("click", () => {
    navigator.clipboard.writeText(
      '<div class="alert-content alert-info">' +
        "\n\t" +
        " This is a info alert with dismissal button." +
        "\n" +
        "</div>"
    );

    let tooltip = document.querySelector("#info-tooltip");
    console.log(tooltip, "ye apna tooltip");
    tooltip.innerHTML = "Copied";
  });
  document
    .querySelector("#clip-alert-info")
    .addEventListener("mouseout", () => {
      let tooltip = document.querySelector("#info-tooltip");
      tooltip.innerHTML = "Copy to Clipboard";
    });
}

// ----------------------------------------------------------------
// warning Alert
if (document.querySelector("#btn-warning-close") != null) {
  document.querySelector("#btn-warning-close").addEventListener("click", () => {
    document.querySelector(".alert-warning").classList.add("fade-out-top");
  });
}

// Copy Content of warning Alert
if (document.querySelector("#clip-alert-warning") != null) {
  document
    .querySelector("#clip-alert-warning")
    .addEventListener("click", () => {
      console.log("called");
      navigator.clipboard.writeText(
        '<div class="alert-content alert-warning">' +
          "\n\t" +
          " This is a warning alert with dismissal button." +
          "\n" +
          "</div>"
      );

      let tooltip = document.querySelector("#warning-tooltip");
      console.log(tooltip, "ye apna tooltip");
      tooltip.innerHTML = "Copied";
    });
  content.addEventListener("mouseout", () => {
    let tooltip = document.querySelector("#warning-tooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  });
}
