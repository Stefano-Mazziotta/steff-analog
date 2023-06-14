import Image from 'next/image'
import styles from './styles.module.css';

export function Gallery({ photos }: { photos: IPhoto[] }) {
  return (
    <section className={styles.galleryContainer}>
      <div className={styles.gridContainer}>
        {photos.map(photo => {
          const orientation = photo.width > photo.height ? styles.horizontal : styles.vertical;

          return (
            <ul key={photo.id} className={`${styles.list} ${orientation}`}>
              <li className={styles.photoWrapper}>
                <Image
                  src={photo.src.regular.url}
                  alt={photo.description}
                  width={photo.width}
                  height={photo.height}
                  className={styles.photo}
                />
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
}