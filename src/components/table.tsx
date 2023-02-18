const Table = ({ forecast }: any) => {
  return (
    forecast && (
      <div className="mt-8 mx-auto">
        <div className="shadow ring-1 ring-black ring-opacity-5">
          <table className="divide-y divide-gray-300 w-full">
            <thead className="bg-gray-50">
              <tr className="divide-x divide-gray-200 text-sm font-semibold text-gray-900">
                <th scope="col" className="px-3 py-3.5">
                  Date
                </th>
                <th scope="col" className="px-3 py-3.5">
                  Temp
                </th>
                <th scope="col" className="hidden sm:inline-block px-3 py-3.5">
                  Description
                </th>
                <th scope="col" className="hidden sm:inline-block px-3 py-3.5">
                  Humidity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {forecast.map((day: any) => (
                <tr key={day.date}>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {day.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {day.day.avgtemp_f}
                  </td>
                  <td className="hidden sm:inline-block whitespace-nowrap px-3 py-4 text-sm text-gray-500 ml-5">
                    {day.day.condition.text}
                  </td>
                  <td className="hidden sm:inline-block whitespace-nowrap px-3 py-4 text-sm text-gray-500 ml-5">
                    {day.day.avghumidity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default Table;
