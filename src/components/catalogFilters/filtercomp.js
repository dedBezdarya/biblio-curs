import { useState, useEffect } from 'react';

function MangaList() {
    const [mangaList, setMangaList] = useState([]);

    useEffect(() => {
        // TODO: fetch manga data from the server using Axios or Fetch
        // and update the mangaList state
    }, []);

    return (
        <div>
            {mangaList.map((manga) => (
                <div key={manga.id}>
                    <h2>{manga.title}</h2>
                    <p>{manga.author}</p>
                    <p>{manga.age_rating}+</p>
                    <p>{manga.category}</p>
                    <p>{manga.language}</p>
                    <p>{manga.release_year}</p>
                    <p>{manga.subscription_status}</p>
                </div>
            ))}
        </div>
    );
}

export default MangaList;
