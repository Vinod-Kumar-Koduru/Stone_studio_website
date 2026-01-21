export default function slugify(str = "") {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // spaces to hyphens
    .replace(/[^a-z0-9-]/g, ""); // remove non-alphanumeric/hyphen
}
