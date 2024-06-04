import { FiArrowUpRight } from "react-icons/fi";

const BlogList = () => {
  const blogs = [
    {
      title: "How talent leaders can help capitalize on generative AI",
      image: "../../assests/Rectangle 253.png",
    },
    {
      title: "How talent leaders can help capitalize on generative AI",
      image: "../../assests/Rectangle 254.png",
    },
    {
      title: "How talent leaders can help capitalize on generative AI",
      image: "../../assests/Rectangle 38.png",
    },
    {
      title: "How talent leaders can help capitalize on generative AI",
      image: "../../assests/buddha.png",
    },
    {
      title: "How talent leaders can help capitalize on generative AI",
      image: "../../assests/buddha.png",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row mx-4 my-4 lg:mx-8 lg:my-8">
      <div className="flex flex-col w-full lg:w-1/4">
        <p className="font-bold mx-4 my-4 lg:mx-8 lg:my-8">Recent Blogs</p>
        <div className="flex flex-col space-y-4">
          {blogs.map((blog, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-36 lg:w-60 lg:h-40 object-cover rounded"
              />
              <div className="flex justify-between items-center space-x-2 my-4">
                <a href="#" className="text-blue-500 hover:underline">
                  {blog.title}
                </a>
                <FiArrowUpRight className="text-black text-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 lg:border-t-0 lg:border-l lg:mx-8 my-4 lg:my-0"></div>

      <div className="w-full max-w-3xl mx-auto p-4 lg:p-8">
        <div className="mb-6">
          <p className="font-normal my-4">BLOG</p>
          <h1 className="text-2xl lg:text-3xl font-bold mb-4 leading-8 lg:leading-10">
            How talent leaders can help capitalize on generative AI
          </h1>
          <p className="text-sm text-gray-500">5-MINUTE READ &bull; 11 FEBRUARY</p>

          <div
            className="h-1 my-4"
            style={{
              background:
                "linear-gradient(90deg, #C8DFF9 -1.95%, #4CD4FF 9.77%, #818BE2 55.1%, #9DF0AC 99.49%)",
            }}
          ></div>
        </div>
        <div className="space-y-4 my-6">
          <p>
            Generative AI has been making headlines across the world as
            individuals and business leaders explore the possibilities it
            offers. The technology's potential is truly vast. Much remains an
            open question, however, about how organizations can implement and
            benefit from it.
          </p>
          <p>
            One recent Accenture study estimated that as much as three-quarters
            (74%) of tasks done in employers’ offices could be performed by
            generative AI in the next three to five years. In another example,
            OpenAI’s ChatGPT is already being used to summarize large-scale
            datasets in ways that save employees hours each week. Talent leaders
            and their organizations are grappling with how to best leverage this
            technology to provide services to their employees and help improve
            areas as diverse as hiring and safety.
          </p>
        </div>
        <h2 className="text-xl lg:text-2xl font-bold mt-8 mb-4">A timely arrival</h2>
        <div className="space-y-4">
          <p>
            Generative AI has been making headlines across the world as
            individuals and business leaders explore the possibilities it
            offers. The technology's potential is truly vast. Much remains an
            open question, however, about how organizations can implement and
            benefit from it.
          </p>
          <p>
            One recent Accenture study estimated that as much as three-quarters
            (74%) of tasks done in employers’ offices could be performed by
            generative AI in the next three to five years. In another example,
            OpenAI’s ChatGPT is already being used to summarize large-scale
            datasets in ways that save employees hours each week. Talent leaders
            and their organizations are grappling with how to best leverage this
            technology to provide services to their employees and help improve
            areas as diverse as hiring and safety.
          </p>
          <img
            src="../../assests/wallpaper.png"
            alt="wallpaper"
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p>
            Generative AI has been making headlines across the world as
            individuals and business leaders explore the possibilities it
            offers. The technology's potential is truly vast. Much remains an
            open question, however, about how organizations can implement and
            benefit from it.
          </p>
          <p>
            One recent Accenture study estimated that as much as three-quarters
            (74%) of tasks done in employers’ offices could be performed by
            generative AI in the next three to five years. In another example,
            OpenAI’s ChatGPT is already being used to summarize large-scale
            datasets in ways that save employees hours each week. Talent leaders
            and their organizations are grappling with how to best leverage this
            technology to provide services to their employees and help improve
            areas as diverse as hiring and safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
