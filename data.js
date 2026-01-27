const businesses = [
  {
    id: "big-tee-fashion",
    name: "Big Tee Clothing and Fashion",
    owner: "Theophilus Edward",
    category: "Fashion",
    location: "Abuja",
    rating: 4,
    stars: "★★★★☆",
    whatsapp: "2349085269325",
    image: "https://i.ibb.co/0VFLjw8D/Screenshot-20260115-093709.png",
    blog: `<p>Big Tee Clothing and Fashion is a premier fashion brand located in Abuja, Nigeria. We specialize in bespoke tailoring that blends traditional African aesthetics with modern, contemporary styles. Our mission is to provide high-quality, perfectly fitted native wear and casual outfits for the modern Nigerian student and professional.</p>

      <h3>Unmatched Craftsmanship</h3>
      <p>At Big Tee, we believe that fashion is a form of self-expression. Every stitch we make is a testament to our commitment to quality. We source the finest fabrics from across the country—ranging from durable cottons to luxurious polished laces—to ensure durability and comfort. Whether you are looking for a sharp Senator suit for a formal event or a relaxed Agbada for a traditional wedding, our team of skilled tailors ensures that you stand out in every room you enter.</p>

      <h3>Sustainability and Ethics</h3>
      <p>We take pride in our ethical production process. By training local apprentices and supporting local textile markets, we contribute to the economic growth of our community. Our clothing isn't just a product; it's a piece of Nigerian heritage redesigned for the future. Join the Big Tee family today and experience the perfect blend of tradition and trend.</p>`
  },
  {
    id: "ellas-braids",
    name: "Ella's Braids & Make-over",
    owner: "Emmanuella Jacob",
    category: "Hairdressing",
    location: "Sokoto",
    rating: 5,
    stars: "★★★★★",
    whatsapp: "2349168596866",
    image: "https://i.ibb.co/nN3Q9HvP/IMG-20251223-WA0018.jpg",
    blog: `<p>Ella’s Braids & Make-over is the go-to beauty hub for students in Sokoto and Kaduna. Founded by Emmanuella Jacob, our salon focuses on enhancing natural beauty through expert hair styling and professional makeup services.</p>

      <h3>Beauty Redefined</h3>
      <p>We specialize in various styles, including knotless braids, traditional weaving, and hair fixing. Our makeup artists are trained to provide looks ranging from 'everyday natural' to 'glamorous party' styles. We use only skin-friendly products and maintain the highest standards of hygiene. Our goal is to ensure every client walks out of our studio feeling confident, beautiful, and ready to take on the world.</p>

      <h3>Client-Centered Approach</h3>
      <p>What sets us apart is our attention to detail and our commitment to customer satisfaction. We understand that your hair is your crowning glory. That’s why we take the time to consult with you before every session, ensuring we understand your hair type and desired look perfectly. From campus events to weddings, Ella's Braids is here to make sure you shine.</p>`
  },
  {
    id: "cuffters-photo",
    name: "Cuffter's Photo World",
    owner: "Confidence Moses",
    category: "Photography",
    location: "Sokoto, Nasarawa",
    rating: 4,
    stars: "★★★★☆",
    whatsapp: "2348160162459",
    image: "https://i.ibb.co/TDJkcqJq/IMG-20260113-WA0021.jpg",
    blog: `<p>Cuffter's Photo World is a creative photography studio serving the needs of students and professionals in Sokoto and Nasarawa. Our lead photographer, Confidence Moses, specializes in portraiture, event coverage for weddings and matriculations, and professional photo editing.

    <h3>Framing Your Memories</h3>
    We use state-of-the-art equipment to ensure that every frame tells a story. Whether you are building a professional LinkedIn profile or capturing the joy of a graduation ceremony, Cuffter's Photo World delivers images that last a lifetime. We believe that photography is an art form, and we take pride in our ability to capture the unique personality and spirit of every subject we photograph.</p>`
  },
  {
    id: "that-boy-gad",
    name: "That-boy-Gad Graphics",
    owner: "Gad",
    category: "Graphics",
    location: "Abuja, Kaduna",
    rating: 4,
    stars: "★★★★☆",
    whatsapp: "2347026207379",
    image: "https://i.ibb.co/ch4gMp7b/Screenshot-20260113-111038.png",
    blog: `<p>That-boy-Gad Graphics is a design studio dedicated to helping small businesses and student entrepreneurs stand out from the crowd. We provide comprehensive graphic design services ranging from professional logo creation to eye-catching flyers for social media marketing.

    <h3>Visual Identity & Branding</h3>
    Our design philosophy is rooted in modern minimalism and high impact. We don't just create designs; we build visual bridges between businesses and their target audience. If you are looking to launch a brand or refresh your current look in Abuja or Kaduna, That-boy-Gad Graphics is your partner in creative excellence. We work closely with our clients to understand their vision and translate it into a compelling visual identity.</p>`
  },
  {
    id: "loners-web",
    name: "Loner's Web Hub",
    owner: "Loner",
    category: "Web",
    location: "Abuja, Kaduna",
    rating: 5,
    stars: "★★★★★",
    whatsapp: "2349023186414",
    image: "https://i.ibb.co/HfYVvWDq/IMG-20240731-WA0013.jpg",
    blog: `<p>Loner's Web Hub is a full-service digital agency focused on bringing Nigerian businesses into the modern era. We specialize in custom website design, mobile app development, and high-level graphics.</p>

      <h3>Digital Excellence</h3>
      <p>We focus on building responsive, fast-loading, and SEO-friendly websites that don't just look good but actually convert visitors into customers. From simple portfolio sites for freelancers to complex e-commerce platforms, Loner's Web Hub provides the technical backbone your business needs to succeed in the digital economy. We use the latest technologies like React, Node.js, and modern CSS frameworks to ensure your site is future-proof.</p>

      <h3>Empowering Small Businesses</h3>
      <p>We believe that every Nigerian entrepreneur deserves a world-class digital presence. Our packages are designed to be affordable yet powerful, giving you the tools you need to compete on a global scale. Beyond just development, we offer ongoing maintenance and digital strategy consulting to help you scale your business effectively.</p>`
  },
  {
    id: "julius-graphics",
    name: "Julius Graphics",
    owner: "Julius Joel",
    category: "Graphics",
    location: "Sokoto, Kwara",
    rating: 4,
    stars: "★★★★☆",
    whatsapp: "2348163434609",
    image: "https://i.ibb.co/hJY2np7S/Screenshot-20260123-222550.png",
    blog: `<p>Julius Graphics is a creative studio operating out of Sokoto and Kwara, providing top-tier design solutions for the modern entrepreneur. Managed by Julius Joel, our studio is built on the foundation of creativity, reliability, and speed.

    <h3>Creative Design Solutions</h3>
    We specialize in high-quality flyer designs, corporate logos, and comprehensive brand identity packages. We understand the fast-paced nature of student entrepreneurship, which is why we offer quick turnaround times without compromising on quality. Julius Graphics is committed to helping local brands achieve a professional look that rivals international standards. We believe that great design should be accessible to everyone.</p>`
  },
  {
    id: "fortunes-makeup",
    name: "Fortune's make-up & beauty home",
    owner: "Fortune",
    category: "Make-up",
    location: "Abuja, Kaduna",
    rating: 5,
    stars: "★★★★★",
    whatsapp: "2347018717632",
    image: "https://i.ibb.co/N6jY5mXF/99079e0f6805412faaead113f089845b-1.jpg",
    blog: `<p>Fortune’s Makeup and Beauty Home is a premier beauty studio dedicated to helping women and event-goers stand out from the crowd. We provide comprehensive makeup services ranging from flawless bridal transformations to vibrant, eye-catching looks for social gatherings and celebrations.</p>
    <h3>Elegance, Artistry & Timeless Beauty</h3>
    <p>Our beauty philosophy is rooted in enhancing your natural features with a touch of modern glam. We don’t just apply products; we create a personalized experience that builds confidence and ensures you feel like the best version of yourself.</p>
    <p>Whether you are preparing for a wedding, celebrating a birthday, or attending a traditional event, Fortune’s Makeup and Beauty Home is your partner in aesthetic excellence.</p>`
  }
];
