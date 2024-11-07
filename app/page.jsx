import members from "@/app/lib/committee.json";
import Icon from "@/public/updc logo white-01.png";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50 sm:py-6 py-3">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="logo flex items-center gap-2">
            <Image src={Icon} className="h-8 sm:h-10 w-auto" alt="club logo" />
          </div>
          <nav className="space-x-6 hidden sm:block font-semibold">
            <a href="#" className="hover:text-red-500">
              Home
            </a>
            <a href="#about" className="hover:text-red-500">
              About
            </a>
            <a href="#events" className="hover:text-red-500">
              Events
            </a>
            <a href="#contact" className="hover:text-red-500">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[600px] flex items-center justify-center text-center bg-blue-500"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/gradient-technology-futuristic-background_52683-75946.jpg?t=st=1731006967~exp=1731010567~hmac=aa6d9feb1a6cb2a928b95b395997515196028982ad14977a462a5363f71b7d01&w=1920')",
        }}
      >
        <div className="bg-black bg-opacity-50 text-white py-12 px-6">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to UGV Project Development Club!
          </h2>
          <p className="text-xl">
            Join us for exciting robotics and software innovation!
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">About Our Club</h2>
          <p className="text-lg text-gray-600 mb-4">
            The UGV Project Development Club at the University of Global Village
            (UGV), Barishal, is a community of innovative students passionate
            about science, technology, and engineering. With guidance from our
            esteemed moderator, Md. Masudur Rahman, and advisor, Sohag Mollik,
            we foster hands-on learning through projects, workshops, and
            teamwork. Join us in exploring new ideas, building technical skills,
            and making a positive impact on our community.
          </p>
          <p className="text-lg text-gray-600">
            Whether you&apos;re here to learn, network, or have fun, we welcome
            all who share the same vision and enthusiasm!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Networking</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals and build lasting
                professional relationships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Workshops</h3>
              <p className="text-gray-600">
                Attend skill-building workshops hosted by industry experts and
                thought leaders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Events</h3>
              <p className="text-gray-600">
                Join our fun and interactive events to learn and socialize with
                the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* teacher Section */}
      <section id="members" className="py-16 bg-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-8">
            Ho&apos;nble Moderator and advisor!
          </h2>
          <div className="flex justify-center *:w-96 flex-wrap gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                width={500}
                height={500}
                src={`/commitee/moderator post-01.jpg`}
                alt="moderator"
                className="w-full h-auto"
              />
              <div className="p-3">
                <h3 className="text-xl font-semibold">Md. Masudur Rahman</h3>
                <p className="text-gray-600">
                  Moderator, UGV Project Development Club
                </p>
                <p className="text-gray-600">Lecturer, Department of CSE</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                width={500}
                height={500}
                src={`/commitee/advisor post-01.jpg`}
                alt="moderator"
                className="w-full h-auto"
              />
              <div className="p-3">
                <h3 className="text-xl font-semibold">Sohag Mollik</h3>
                <p className="text-gray-600">
                  Advisor, UGV Project Development Club
                </p>
                <p className="text-gray-600">Lecturer, Department of CSE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-8">Meet Our Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Member 1 */}
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  width={500}
                  height={500}
                  src={`/commitee/${member.image}`}
                  alt={member.name}
                  className="w-full h-auto"
                />
                <div className="p-3">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">Semester: {member.semester}</p>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-lg mb-4">
            We would love to hear from you! Whether you have questions or want
            to get involved, feel free to reach out.
          </p>
          <form className="mx-auto w-full max-w-lg">
            <input
              type="email"
              className="w-full p-3 mb-4 rounded-lg"
              placeholder="Your Email"
              required
            />
            <textarea
              className="w-full p-3 mb-4 rounded-lg"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center space-y-2 text-slate-400">
          <p>&copy; 2024 UGV Project Development Club. All Rights Reserved.</p>
          <p>
            Developed by:{" "}
            <a
              href="http://ahsandevhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-500"
            >
              Ahsan Habib
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
