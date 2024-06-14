import * as React from "react";

const Header = () => (
  <header className="flex gap-5 justify-between px-10 py-2 w-full text-xl font-semibold text-white bg-blue-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <div className="my-auto">ID</div>
    <div className="justify-center whitespace-nowrap">Date</div>
    <nav className="flex gap-5 self-start mt-1.5">
      <div className="text-center">Kitchen</div>
      <div className="flex-auto">No. of Items</div>
      <div>Raised by</div>
    </nav>
    <div className="my-auto">Status</div>
  </header>
);

const TableRow = ({ id, date, kitchen, items, raisedBy, status, bgColor }) => (
  <article className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center px-4 py-3.5 mt-1 w-full ${bgColor} rounded-lg max-md:max-w-full`}>
    <div className="text-zinc-800">{id}</div>
    <time dateTime={date}>{date}</time>
    <div>{kitchen}</div>
    <div>{items}</div>
    <div>{raisedBy}</div>
    <div className="text-sky-500">{status}</div>
  </article>
);

const data = [
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-blue-200" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-indigo-50" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-blue-200" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-indigo-50" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-blue-200" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-indigo-50" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-blue-200" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-indigo-50" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-blue-200" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-indigo-50" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-blue-200" },
  { id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", items: 51, raisedBy: "Srikanth", status: "Raised", bgColor: "bg-indigo-50" },
];

function RTSComponent() {
  return (
    <main className="flex flex-col text-base font-medium text-black">
      {data.map((row, index) => (
        <TableRow 
          key={index}
          id={row.id}
          date={row.date}
          kitchen={row.kitchen}
          items={row.items}
          raisedBy={row.raisedBy}
          status={row.status}
          bgColor={row.bgColor}
        />
      ))}
    </main>
  );
}

export default RTSComponent;