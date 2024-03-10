import Image from 'next/image';
import '/app/ui/global.scss';

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
          src='/next.svg'
          width='200'
          height='100'
          alt='some test image'
        />
        </body>
    </html>
  );
}
