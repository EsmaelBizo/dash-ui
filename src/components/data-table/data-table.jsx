function DataTable({
  columns,
  data,
  emptyState,
  getRowKey = (row, index) => row.id ?? index,
}) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="border-b border-black/5 px-3 py-3 text-left text-[10px] font-black uppercase tracking-[0.08em] text-black/45"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={getRowKey(row, rowIndex)}
                className="border-b border-black/5 last:border-b-0"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={column.className ?? "px-3 py-3 text-sm"}
                  >
                    {column.render
                      ? column.render(row, rowIndex)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>
                {emptyState}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
