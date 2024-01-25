"use client";

import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
      .then((data) => toast.success(`You are now following ${data.following.username}`))
      .catch(() => toast.error("Failed to follow the user"));
    });
  };

  const handleUnFollow = () => {
    startTransition(() => {
      onUnfollow(userId)
      .then((data) => toast.success(`You have unfollowed the user ${data.following.username}`))
      .catch(() => toast.error("Failed to unfollow the user"));
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnFollow();
    } else {
      handleFollow();
    }
  }

  return (
    <Button
      disabled={isPending}
      variant="primary"
      onClick={onClick}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default Actions;
