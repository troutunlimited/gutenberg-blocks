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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {

  const {
    title,
    titleTag,
    titleClass,
    linkUrl,
    excerpt,
    buttonText,
    imageObj,
    author,
    authorImageObj
  } = attributes;

  const TitleTag = titleTag;

  const card = (
    <>
      {
        imageObj !== null &&
        <div class="card-media">
          <img className={ `image wp-image-${imageObj.id}` }
            src={ imageObj.sizes.md_3x2.url }
            />
        </div>
      }
      <div class="card-content">
        <TitleTag className={`title ${titleClass}`}>{title}</TitleTag>
        <p class="excerpt">{excerpt}</p>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          {
            authorImageObj !== null &&
            <img class="author-image"
              src={ authorImageObj.sizes.thumbnail.url }
              />
          }
          <span class="author">{author}</span>
        </div>
        <button class="card-button">
          {buttonText}
        </button>
      </div>
    </>
  )


  return (
    <>
      {
        linkUrl !== '' &&
        <a href={linkUrl} { ...useBlockProps.save() }>
          {card}
        </a>
      }
      {
        linkUrl == '' &&
        <div { ...useBlockProps.save() }>
          {card}
        </div>
      }
    </>
  )



}
