import React from 'react'
import TagsCard from './common/TagsCard';
import { tagCardData } from '@/utils/helpers/dummyContent';
import CTA from './CTA';

const TagsSection: React.FC<{ start: number; end: number }> = ({ start, end }) => (
    <section className="max-w-[750px] mx-auto">
      <div className="mt-4">
        {tagCardData.slice(start, end).map((content) => (
          <TagsCard
            key={content.id}
            imageSrc={content.image}
            title={content.title}
            badgeHeading={content.badgeHeading}
            badgeDescription={content.badgeDescription}
            userPicSrc={content.userimage}
            userName={content.userName}
            points={content.points}
            tagName={content.tagName} 
          />
        ))}
      </div>
      <CTA />
    </section>
  );

export default TagsSection