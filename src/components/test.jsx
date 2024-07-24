import { useEffect } from "react";

export default function Widget() {
   useEffect(() => {
      const handleHeadingClick = (e) => {
         const heading = e.target;
         const list = heading.nextElementSibling;
         if (window.innerWidth < 640) {
            // Check if in mobile view
            list.classList.toggle("hidden");
         }
      };

      const groups = document.querySelectorAll(".group");
      groups.forEach((group) => {
         const heading = group.querySelector("h2");
         heading.addEventListener("click", handleHeadingClick);
      });

      return () => {
         groups.forEach((group) => {
            const heading = group.querySelector("h2");
            heading.removeEventListener("click", handleHeadingClick);
         });
      };
   }, []);

   return (
      <div className="bg-background text-foreground p-6">
         <footer className="container mx-auto py-8">
            <div className="mb-6 text-center">
               <h1 className="text-3xl font-bold mb-2">Neuzy</h1>
               <p className="text-muted-foreground">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                  enim velit mollit.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center sm:text-left">
               <div className="group">
                  <h2 className="font-semibold mb-2 cursor-pointer sm:cursor-default">World</h2>
                  <ul className="list-none space-y-1 hidden sm:block">
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Politics
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Health
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Business
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Tech
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Entertainment
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="group">
                  <h2 className="font-semibold mb-2 cursor-pointer sm:cursor-default">Tech</h2>
                  <ul className="list-none space-y-1 hidden sm:block">
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Science
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Magazine
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Startup
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Crypto
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="group">
                  <h2 className="font-semibold mb-2 cursor-pointer sm:cursor-default">Life</h2>
                  <ul className="list-none space-y-1 hidden sm:block">
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Food
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Style
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Sport
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Movie
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Music
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="group">
                  <h2 className="font-semibold mb-2 cursor-pointer sm:cursor-default">Magazine</h2>
                  <ul className="list-none space-y-1 hidden sm:block">
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Fashion
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Blogger
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           People
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="group">
                  <h2 className="font-semibold mb-2 cursor-pointer sm:cursor-default">Other</h2>
                  <ul className="list-none space-y-1 hidden sm:block">
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           About
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Contact us
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                           Terms & Conditions
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </footer>
      </div>
   );
}
