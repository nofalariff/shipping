const rows = [
  {
    label: "Titik serah terima",
    portToPort: "Gudang pelabuhan tujuan",
    portToDoor: "Alamat penerima",
  },
  {
    label: "Estimasi biaya",
    portToPort: "Lebih hemat",
    portToDoor: "Termasuk biaya trucking",
  },
  {
    label: "Cocok untuk",
    portToPort: "Kontainer penuh (FCL), gudang dekat pelabuhan",
    portToDoor: "Pengiriman ritel & kargo campuran (LCL)",
  },
  {
    label: "Penanganan bea cukai",
    portToPort: "Mandiri oleh penerima",
    portToDoor: "Didampingi tim LogiSend",
  },
];

export function ServiceComparison() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-5 py-3 font-medium text-muted-foreground">Aspek</th>
              <th className="px-5 py-3 font-medium text-foreground">Port to Port</th>
              <th className="px-5 py-3 font-medium text-foreground">Port to Door</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.label} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                <td className="px-5 py-3.5 text-muted-foreground">{row.label}</td>
                <td className="px-5 py-3.5 text-foreground">{row.portToPort}</td>
                <td className="px-5 py-3.5 text-foreground">{row.portToDoor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
