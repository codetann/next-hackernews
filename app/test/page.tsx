import * as api from "../../api";
import scaper from "open-graph-scraper";

interface Data extends api.Story {
  image: string;
}

async function getData(): Promise<Data[]> {
  let stories = [];
  const topStories = await api.getTopStories();
  for (let i = 0; i < 10; i++) {
    const story = await api.getStoryById(topStories[i]);
    const image = await getImage(story.url);
    stories.push({ ...story, image });
  }

  return stories;
}

async function getImage(url: string) {
  const options = { url };
  try {
    const { result } = await scaper(options);

    if (result.ogImage) {
      return result.ogImage[0].url;
    }

    if (result.twitterImage) {
      return result.twitterImage[0].url;
    }

    return "https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF";
  } catch (error) {
    return "https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF";
  }
}

export default async function Test() {
  const data = await getData();

  return (
    <div className="flex flex-col space-y-4 ">
      {data.map((story) => (
        <a
          key={story.id}
          href={story.url}
          target="_blank"
          className="flex flex-col space-y-2 bg-gray-800 w-96 p-4 cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-95"
        >
          <img
            src={story.image}
            alt=""
            className="w-full h-44 object-cover rounded-md"
          />
          <h2 className="text-lg font-bold">{story.title}</h2>
          <p className="text-white opacity-60">{story.by}</p>
          <p>Comments: {story.kids.length}</p>
          <p>{new Date(story.time).toDateString()}</p>
        </a>
      ))}
    </div>
  );
}
