import React from 'react';
import WidgetCategory from './WidgetCategory';
import WidgetTag from './WidgetTag';
import WidgetLatestPosts from './WidgetLatestPosts';
import WidgetLinks from './WidgetLinks';
import WidgetSearch from './WidgetSearch';
import config from '../../../data/SiteConfig';
import GoogleAdvertise from '../Adsense/Adsense';

const Sidebar = ({ tagList, categoryList, latestPostEdges, links }) => {
  return (
    <aside
      className={`sidebar-container ${
        config.sidebarSticky ? 'height-full' : ''
      }`}
      style={{ width : '300px'}}
    >
      <WidgetSearch />

      {latestPostEdges && (
        <WidgetLatestPosts latestPostEdges={latestPostEdges} />
      )}

      {categoryList && <WidgetCategory categoryList={categoryList} />}

      {tagList && <WidgetTag tagList={tagList} />}

      {links && (
        <div className="position-sticky top-zero">
          <WidgetLinks links={links} />
        </div>
      )}


    <GoogleAdvertise
            client="ca-pub-2038621379918916"
            slot="7576233308"
            format="fluid"
            responsive="true"
            layoutKey="-fz+6a+19-cg+hh"
          />


    </aside>
  );
};

export default Sidebar;
