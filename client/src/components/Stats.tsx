export default function Stats() {
  const stats = [
    { value: "$14.2M", label: "Market Cap" },
    { value: "12,560+", label: "Holders" },
    { value: "$3.8M", label: "Liquidity" },
    { value: "+324%", label: "30-Day Growth" }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg">
              <p className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">{stat.value}</p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
