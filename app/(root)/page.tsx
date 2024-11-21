import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const {data:posts} = await sanityFetch({query:STARTUPS_QUERY});

  console.log(JSON.stringify(posts, null ,2))

  //image: "https://www.masterfap.net/profile/milica-yb/photos/Bn9Bl1aDdj/milica-yb.webp",

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup,<br />Connect with entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit ideas, vote on pitches and get noticed in virtual competitions</p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `search result for "${query}"` : 'All startups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard , index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p>No startups</p>
          )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}

//condición ? expresiónSiVerdadero : expresiónSiFalso;