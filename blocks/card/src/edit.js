/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck
} from '@wordpress/block-editor';

/**
 * Imports components so we can nest their functionality within our component
 */

import {
  SelectControl,
  TextControl,
  Panel,
  PanelBody,
  PanelRow,
  Button
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( {attributes, setAttributes}   ) {

  const {
    title,
    truncatedTitle,
    titleTag,
    titleClass,
    linkUrl,
    excerpt,
    buttonText,
    imageObj,
    author,
    authorImageObj
  } = attributes;

  const updateTitle = value => {
    setAttributes({ title: value });
    if(value.length > 55) {
      let truncated = value;
      setAttributes({ title: truncated.substring(0, 54) + '&hellip;' });
    }
  }

  const updateTitleTag = value => setAttributes({ titleTag: value });

  const updateTitleClass = value => setAttributes({ titleClass: value });

  const updateExcerpt = value => {
    setAttributes({ excerpt: value });
    if(value.length > 110) {
      let truncated = value;
      setAttributes({ excerpt: truncated.substring(0, 109) + '&hellip;' });
    }
  }

  const updateLinkUrl = value => setAttributes({ linkUrl: value });

  const updateButtonText = value => setAttributes({ buttonText: value });

  const updateImage = media => setAttributes({ imageObj: media });

  const updateAuthor = value => setAttributes({ author: value });

  const updateAuthorImage = media => setAttributes({ authorImageObj: media });

  const getImageButton = (open) => {
    if(imageObj) {
      return (
        <img
          src={ imageObj.sizes.md_3x2.url }
          onClick={ open }
          className={`image wp-image-${imageObj.id}`}
          />
      );
    }
    else {
      return (
        <div className="button-container">
          <Button
            onClick={ open }
            className="button button-large"
            >
            Add an image
          </Button>
        </div>
      );
    }
  };

  const getAuthorImageButton = (open) => {
    if(authorImageObj) {
      return (
        <img
          src={ authorImageObj.sizes.thumbnail.url }
          onClick={ open }
          className="author-image"
          />
      );
    }
    else {
      return (
        <div className="button-container">
          <Button
            onClick={ open }
            className="button button-small"
            >
            Add image
          </Button>
        </div>
      );
    }
  };

	return ([
		<div { ...useBlockProps() }>
      <MediaUploadCheck>
        <MediaUpload
          onSelect={( media ) => updateImage(media)}
          allowedTypes={['image']}
          render={({ open }) => getImageButton(open)}
        />
      </MediaUploadCheck>
      <div class="card-content">
  			<RichText
          key='editable'
          value={title}
          tagName={titleTag}
          className={`title ${titleClass}`}
          placeholder="Add a title"
          preserveWhiteSpace={true}
          multiline={false}
          onChange={updateTitle}
          />
        <RichText
          key="editable"
          value={excerpt}
          tagName='p'
          className='excerpt'
          placeholder="Add an excerpt"
          allowedFormats={[]}
          preserveWhiteSpace={true}
          multiline={false}
          onChange={updateExcerpt}
          />
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={( media ) => updateAuthorImage(media)}
              allowedTypes={['image']}
              render={({ open }) => getAuthorImageButton(open)}
            />
          </MediaUploadCheck>
          <RichText
            key="editable"
            value={author}
            tagName='p'
            className='author'
            placeholder="Author name"
            allowedFormats={[]}
            preserveWhiteSpace={true}
            multiline={false}
            onChange={updateAuthor}
            />
        </div>
        <RichText
          key="editable"
          value={buttonText}
          tagName='button'
          className="card-button"
          placeholder='Button text'
          multiline={false}
          onChange={updateButtonText}
          />
      </div>
      <InspectorControls>
        <Panel>
          <PanelBody title="Title" initialOpen={ true }>
              <SelectControl
                label="Title Tag"
                value={titleTag}
                options={[
                  { label: "H2", value: "h2"},
                  { label: "H3", value: "h3"},
                  { label: "H4", value: "h4"},
                  { label: "H5", value: "h5"},
                  { label: "H6", value: "h6"},
                ]}
                onChange={updateTitleTag}
              />
              <SelectControl
                label="Title Size"
                value={titleClass}
                options={[
                  { label: "H2", value: "h2"},
                  { label: "H3", value: "h3"},
                  { label: "H4", value: "h4"},
                  { label: "H5", value: "h5"},
                  { label: "H6", value: "h6"},
                ]}
                onChange={updateTitleClass}
              />
          </PanelBody>
          <PanelBody title="Link" initialOpen={ true }>
            <TextControl
              label="URL"
              value={linkUrl}
              onChange={updateLinkUrl}
              placeholder="http://"
            />
          </PanelBody>
        </Panel>
      </InspectorControls>
		</div>
	]);
}
