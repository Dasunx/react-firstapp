import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';
import CollectionPreview from '../preview-collection/preview-collection.component';

const CollectionsOverview = ({collections}) =>(
    <div className='collection-overview'>
        {collections.map(({id, ...otherCollectionProps}) =>(
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
  });

  export default connect(mapStateToProps)(CollectionsOverview);