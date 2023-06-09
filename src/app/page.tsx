import Sample from '@/components/Sample';
import { Typography } from '@/components/typography';

export default function Home() {
  return (
    <main className='bg-bg-tertiary text-text-primary'>
      calendiary
      <Typography variant='caption'>typography</Typography>
      <Typography className='text-yellow-500'>Sample Text</Typography>
      <Typography as='a' href='alink'>
        Sample Text
      </Typography>
      <Typography variant={'heading1'}>Sample Text</Typography>
      <Sample />
    </main>
  );
}
