import Button from "./button";

function Card({ title, desc, status, date = "DD/MM/YYYY", onEdit, onDelete }) {
  return (
    <div
      className={`bg-white shadow rounded-lg p-4 my-4 text-center space-y-2 border border-black/10 hover:bg-gray-400/5`}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
      <p
        className={`text-xs mt-2 font-medium ${
          status === "Done"
            ? "text-blue-600"
            : status === "In Progress"
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        {status}
      </p>

      <div className="flex w-full justify-between">
        <div className="flex gap-2 mt-2 items-end">
          <Button variant="warning" onClick={onEdit}>
            Edit
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Hapus
          </Button>
        </div>
        <p className="text-black/45 self-end">{date}</p>
      </div>
    </div>
  );
}

export default Card;
