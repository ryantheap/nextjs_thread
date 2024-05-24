import Image from "next/image";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="post">
      <div>
        <Image
          alt="user"
          src={post.profile}
          width={50}
          height={50}
          className=" rounded-full object-contain"
        />
      </div>

      <div className="text-white w-full">
        <div className="flex justify-between items-center">
          <Link href={`/@${post.pseudo}`}>
            <b>{post.pseudo}</b>
          </Link>
          <div className="text-sm text-threads-gray-light">Il y a 1 heure</div>
        </div>

        <div className="mt-3 whitespace-pre-line">{post.content}</div>
      </div>
    </div>
  );
}
