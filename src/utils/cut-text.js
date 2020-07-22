export default function (value, maxlength) {
  const len = value.length;
  return len > maxlength ? `${value.substr(0, maxlength - 2).trim()}...` : len <= maxlength ? value : null;
}