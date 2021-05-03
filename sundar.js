// Copy Script Link
let content = document.querySelector("#script-link");
console.log(content);
content.addEventListener("click", () => {
  console.log("called");
  navigator.clipboard.writeText(
    '<script src="https://grab-ui.netlify.app/components/get_started"></script>'
  );

  let tooltip = document.querySelector("#scripttooltip");
  console.log(tooltip, "ye script tooltip");
  tooltip.innerHTML = "Copied";
});
content.addEventListener("mouseout", () => {
  let tooltip = document.querySelector("#scripttooltip");
  tooltip.innerHTML = "Copy to Clipboard";
});

// Copy css link
content = document.querySelector("#css-link");
console.log(content);
content.addEventListener("click", () => {
  console.log("called");
  navigator.clipboard.writeText(
    '<link rel="stylesheet" href="https://grab-ui.netlify.app/components/get_started">'
  );
  let tooltip = document.querySelector("#mytooltip");
  console.log(tooltip, "ye css tooltip");
  tooltip.innerHTML = "Copied";
});

content.addEventListener("mouseout", () => {
  let tooltip = document.querySelector("#mytooltip");
  tooltip.innerHTML = "Copy to Clipboard";
});

$(window).load(function () {
  $(function () {
    $("#alertlink").click(function () {
      $("#main").load("./components/alert/alert.html");
    });
  });
});
