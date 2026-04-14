import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Story", href: "/our-story" },
        { label: "How it works", href: "/how-it-works" },
        { label: "Browse Festivals", href: "/browse-festivals" },
        { label: "Culture", href: "/culture" },
        { label: "Careers", href: "/careers" },
        { label: "Advertise with us", href: "/advertise" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blogs", href: "/blogs" },
        { label: "Press", href: "/press" },
        { label: "Newsroom", href: "/newsroom" },
        { label: "Awards & Recognition", href: "/awards-recognition" },
        { label: "Get the app", href: "/get-the-app" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Privacy & Policy", href: "/privacy-policy" },
        { label: "Grievance Redressal", href: "/grievances-redressal" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: "Shipping Policy", href: "/shipping-policy" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Whatsapp Community", href: "/community/whatsapp" },
        { label: "Telegram Community", href: "/community/telegram" },
        { label: "Facebook Community", href: "/community/facebook" },
        { label: "Instagram Community", href: "/community/instagram" },
        { label: "Youtube Community", href: "/community/youtube" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-black pt-16 pb-8 px-4 md:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        {footerLinks.map((column) => (
          <div key={column.title} className="flex flex-col gap-4">
            <h3 className="font-semibold text-white/90 text-sm tracking-wide">{column.title}</h3>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-white/90 text-sm tracking-wide">Help & Support</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/help-center" className="text-sm text-gray-400 hover:text-primary transition-colors">Help Center</Link>
            </li>
            <li>
              <Link href="/support-service" className="text-sm text-gray-400 hover:text-primary transition-colors">Support Service</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">© 2026 Shortfundly Media Labs Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-colors"></div>
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-colors"></div>
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center cursor-pointer hover:bg-white/[0.1] transition-colors"></div>
        </div>
      </div>
    </footer>
  );
}
