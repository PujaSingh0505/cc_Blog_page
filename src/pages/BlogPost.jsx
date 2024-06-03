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
      image:"../../assests/buddha.png",
    },
    {
      title: "How talent leaders can help capitalize on generative AI",
      image: "../../assests/buddha.png",
    },
  ];
 
  return (
    <div className="flex  mx-[2rem] my-[2rem]">
      <div className="flex flex-col w-[20%]">
        <p className="font-bold mx-[2rem] my-[2rem]">Recent Blogs</p>
        <div className="flex flex-col">
          {blogs.map((blog, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-[242px] h-[136px] object-cover rounded"
              />
              <div className="flex justify-between items-center space-x-2 my-[1rem]">
                <a href="#" className="text-blue-500 hover:underline">
                  {blog.title}
                </a>
                <FiArrowUpRight className="text-black size-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
 
      <div className="border border-gray-200 mx-[5rem]"></div>
 
      <div className=" max-w-3xl mx-auto p-8">
        <div className="mb-6">
          <p className="font-normal  my-[2rem]">BLOG</p>
          <h1 className="text-3xl font-bold mb-[2rem] leading-10">
            How talent leaders can help capitalize on generative AI
          </h1>
          <p className="text-sm text-gray-500">
            5-MINUTE READ &bull; 11 FEBRUARY
          </p>
 
          <div
            className="h-[0.5rem] my-[2rem]"
            style={{
              background:
                "linear-gradient(90deg, #C8DFF9 -1.95%, #4CD4FF 9.77%, #818BE2 55.1%, #9DF0AC 99.49%)",
            }}
          ></div>
        </div>
        <div className="space-y-4 my-[3rem]">
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
        <h2 className="text-2xl font-bold mt-8 mb-4">A timely arrival</h2>
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
 