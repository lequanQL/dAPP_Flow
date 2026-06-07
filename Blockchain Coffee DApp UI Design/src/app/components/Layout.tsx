import { Outlet, Link, useLocation } from "react-router";
import { Coffee, Home, Sprout, Factory, ShoppingBag, Shield } from "lucide-react";
import { motion } from "motion/react";

export function Layout() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/farmer", icon: Sprout, label: "Farmer" },
    { path: "/processor", icon: Factory, label: "Processor" },
    { path: "/consumer", icon: ShoppingBag, label: "Consumer" },
    { path: "/admin", icon: Shield, label: "Admin" },
  ];
  
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };
  
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Header */}
      <header className="bg-white border-b border-[#e8dfd0] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-[#6b4423] to-[#8b5a3c] p-2 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                <Coffee className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-[#4a3829]">CoffeeChain</h1>
                <p className="text-xs text-[#8b7355]">Đắk Lắk, Vietnam</p>
              </div>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative px-4 py-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`size-4 ${active ? 'text-[#6b4423]' : 'text-[#8b7355]'}`} />
                      <span className={`text-sm ${active ? 'text-[#4a3829] font-medium' : 'text-[#8b7355]'}`}>
                        {item.label}
                      </span>
                    </div>
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-[#f4ebe0] rounded-lg -z-10"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <div className="w-10 h-10 rounded-lg bg-[#f4ebe0] flex items-center justify-center">
                <Coffee className="size-5 text-[#6b4423]" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-[#e8dfd0] bg-white">
          <div className="flex justify-around py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg"
                >
                  <Icon className={`size-5 ${active ? 'text-[#6b4423]' : 'text-[#8b7355]'}`} />
                  <span className={`text-xs ${active ? 'text-[#4a3829] font-medium' : 'text-[#8b7355]'}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>
    </div>
  );
}
