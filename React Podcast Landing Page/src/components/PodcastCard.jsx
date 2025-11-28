// src/components/PodcastCard.jsx

/**
 * Displays a simple preview of a single podcast.
 *
 * Right now the card only shows the podcast title. In later phases
 * we will extend this card to also show the image, number of seasons,
 * genres, and last updated date.
 *
 * @param {Object} props - React props object.
 * @param {Object} props.podcast - The podcast data to display.
 * @param {string} [props.podcast.title] - Title of the podcast show.
 * @returns {JSX.Element} A basic podcast card.
 */
function PodcastCard({ podcast }) {
  return (
    <article className="podcast-card">
      <h2 className="podcast-card__title">
        {podcast.title || "Untitled podcast"}
      </h2>
    </article>
  );
}

export default PodcastCard;
