import Image from 'next/image';
import '/app/ui/global.scss';
import nextImage from '/public/next.svg';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <h3>Test Image</h3>
        <Image
          src={nextImage}
          alt='some test image'
        />
        </body>
    </html>
  );
}
