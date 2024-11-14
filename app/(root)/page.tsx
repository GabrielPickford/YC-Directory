//import { SearchParams } from "next/dist/server/request/search-params";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup,<br />Connect with entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit ideas, vote on pitches and get noticed in virtual competitions</p>
        <SearchForm query={query} />
      </section>
      <section className="section_conyainer">
        <p className="text-30-semibold">
          {query ? 'search result for "${query}"' : 'All startups'}
        </p>
      </section>
    </>
  );
}
