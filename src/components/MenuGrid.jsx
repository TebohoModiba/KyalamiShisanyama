import React from 'react';

const MENU_CATEGORIES = [
  {
    title: "Signature Platters",
    description: "Perfect for sharing with friends and family during events.",
    items: [
      { name: "The Kyalami Combo", price: "R380", desc: "Beef chuck, traditional wors, and mixed chicken portions served with chakalaka and pap." },
      { name: "Lounge Platter XL", price: "R550", desc: "Generous cuts of premium lamb chops, beef chuck, traditional wors, and grilled wings." }
    ]
  },
  {
    title: "Traditional Delicacies",
    description: "Slow-cooked authentic classics packed with rich local flavors.",
    items: [
      { name: "Mogodu (Tripe)", price: "R110", desc: "Perfectly seasoned, slow-cooked traditional tripe served with hot dumpling (Ujeqe)." },
      { name: "Pork Trotters", price: "R95", desc: "Rich and gelatinous traditional slow-stewed trotters served with pap." },
      { name: "Ox Tongue", price: "R120", desc: "Tender, succulent sliced ox tongue simmered in a savory herb gravy." }
    ]
  },
  {
    title: "Sides & Accompaniments",
    description: "The essential pairings to finish off a perfect plate.",
    items: [
      { name: "Pap & Gravy", price: "R30", desc: "Traditional fluffy maize meal paired with a rich, house-made sweet tomato gravy." },
      { name: "Chakalaka", price: "R25", desc: "Spicy, flavorful local vegetable relish served fresh." },
      { name: "Dumpling (Ujeqe)", price: "R25", desc: "Soft, pillowy steamed bread made fresh daily." }
    ]
  }
];

export default function MenuGrid() {
  return (
    <section id="menu" className="py-20 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
            On The Grill
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">Our Culinary Highlights</h2>
          <p className="text-neutral-400 mt-2 max-w-xl mx-auto">
            From flame-kissed braai stands to authentic, slow-cooked comforts.
          </p>
        </div>

        <div className="space-y-16">
          {MENU_CATEGORIES.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="border-b border-neutral-800 pb-4">
                <h3 className="text-xl font-bold text-neutral-100">{category.title}</h3>
                <p className="text-neutral-400 text-sm mt-1">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-neutral-900/40 border border-neutral-900 p-6 rounded-2xl flex justify-between items-start gap-4 hover:border-neutral-800 transition-colors">
                    <div className="space-y-1">
                      <h4 className="font-bold text-neutral-200">{item.name}</h4>
                      <p className="text-neutral-400 text-xs leading-relaxed max-w-md">{item.desc}</p>
                    </div>
                    <span className="text-amber-500 font-extrabold text-lg tracking-tight shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
