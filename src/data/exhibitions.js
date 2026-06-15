export const EXHIBITIONS = [
  {
    id: 'peoples-artist-2026',
    type: 'competition',
    title: "The People's Artist",
    subtitle: 'Presented by Johnny Depp',
    organizer: 'The Art of Elysium',
    startDate: '2026-05-04',
    endDate: '2026-08-06',
    image: '/exhibitions/peoples_artist.jpeg',
    url: 'https://peoplesartist.org/2026/ana-elisa-cazares',
    description:
      'Ana Elisa is competing in The People\'s Artist — a nationwide competition where the winner appears in Artforum Magazine, receives $25,000, and exhibits at The Art of Elysium\'s Salon.',
    body: [
      'Ana Elisa is among the artists competing in The People\'s Artist, a nationwide competition presented by Johnny Depp and operated by Colossal in support of The Art of Elysium. The winner will be featured in Artforum Magazine, receive a $25,000 prize, and display their work at The Art of Elysium\'s Salon.',
      'Her work is dedicated to the preservation of the unspoken freezing raw emotion and fleeting narratives that would otherwise be lost to time. Through this competition, she brings that vision to a national audience — inviting viewers to vote and help carry these stories forward.',
      'Cast your free daily vote or make an even greater impact through a donation vote, supporting The Art of Elysium in their mission to use art as a catalyst to help people triumph over difficult life challenges.',
      'Voting runs from May 4 through August 6. Every vote counts — help Ana Elisa advance in the competition.',
    ],
  },
  {
    id: 'harris-county-juried-exhibition',
    type: 'exhibition',
    title: 'Harris County Juried Exhibition',
    venue: 'Silver Street Studios',
    address: '2000 Edwards St, Houston, TX 77007',
    curator: 'Hesse McGraw',
    startDate: '2026-06-01',
    endDate: '2026-07-18',
    receptionDate: '2026-06-11',
    receptionTime: '6 – 8 PM',
    image: '/exhibitions/harris_county_juried_exhibition.jpeg',
    url: 'https://glasstire.com/events/2026/05/21/harris-county-juried-exhibition/',
    description:
      'Ana Elisa is among the featured artists in this annual juried show celebrating contemporary art from Harris County.',
    body: [
      'Silver Street Studios proudly presents the Harris County Juried Exhibition, a vibrant celebration of contemporary art created by artists who live or work within Harris County. This annual exhibition invites visitors to experience the creative pulse of our region through a wide range of artistic voices, each contributing to the cultural richness that defines our community.',
      'Juried and curated by Hesse McGraw and set within the energetic atmosphere of Silver Street Studios, the exhibition offers an inspiring journey through new ideas, fresh perspectives, and the innovative work of local artists. From bold experiments in form and material to thoughtful reflections on the world around us, the exhibition brings together a dynamic selection of artworks that reveal the depth and diversity of artistic practice in Houston.',
      'Ana Elisa is honored to be among the featured artists in this year\'s exhibition, contributing work that reflects her ongoing exploration of culture, emotion, and human connection. Her participation marks another chapter in bringing Sentiments by Ana Elisa to audiences across Houston\'s thriving arts community.',
      'Join us on June 11, from 6–8 pm, to celebrate the creativity that shapes our region and support the artists who help make Houston one of the most imaginative and culturally vibrant cities in the country.',
    ],
  },
];

export function getExhibitionById(id) {
  return EXHIBITIONS.find((event) => event.id === id);
}
