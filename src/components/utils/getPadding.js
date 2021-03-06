export default function getPadding(contentPadding) {
  let padding = "";
  if (contentPadding !== null || contentPadding !== undefined) {
    if (Array.isArray(contentPadding)) {
      padding = contentPadding.map((i) => `${i}px`).join(" ");
    }
    if (typeof contentPadding === "number") {
      padding = `${contentPadding}px`;
    }
  }
  return padding;
}
