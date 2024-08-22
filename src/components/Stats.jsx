export default function Stats({
  category = "default",
  score = 0,
  icon = "",
}) {
  const colorMap = {
    Reaction: {
      text: "text-red-800",
      bg: "bg-red-50"
    },
    Memory: {
      text: "text-yellow-800",
      bg: "bg-yellow-50"
    },
    Verbal: {
      text: "text-green-800",
      bg: "bg-green-50"
    },
    Visual: {
      text: "text-blue-800",
      bg: "bg-blue-50"
    },
  };

  const bgColor = colorMap[category].bg || "bg-black-800"
  const textColor = colorMap[category].text || "bg-black-50"

  return (
    <div
      className={`flex rounded-xl justify-between px-4 py-4 ${bgColor}`}
    >
      <div className="flex gap-x-3">
        <img src={icon} alt={`${category} icon`} />
        <p className={textColor}>{category}</p>
      </div>
      <p>
        <span
          className="text-gray-600"
        >
          {score}
        </span>  /  100
      </p>
    </div>
  );
}
