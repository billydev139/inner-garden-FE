const Footer: React.FC = () => {
    return (
      <footer className="bg-[#564A8D] py-4">
        <div className="container mx-auto">
          <p className="text-center text-white">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  