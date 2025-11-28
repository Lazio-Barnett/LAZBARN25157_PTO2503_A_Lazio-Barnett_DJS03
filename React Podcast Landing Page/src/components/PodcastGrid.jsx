// src/components/PodcastGrid.jsx
import PodcastCard from "./PodcastCard.jsx";

/**
 * Renders a grid of podcast cards.
 *
 * This component receives an array of podcast objects and uses
 * Array.prototype.map to turn each podcast into a <PodcastCard />.
 * It does not fetch data or manage state; it only handles layout.
 *
 * @param {Object} props - React props object.
 * @param {Array<Object>} props.podcasts - List of podcasts to display.
 * @returns {JSX.Element} A grid of PodcastCard components.
 */
function PodcastGrid({ podcasts }) {
  return (
    <section className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id || podcast.title} podcast={podcast} />
      ))}
    </section>
  );
}

export default PodcastGrid;
