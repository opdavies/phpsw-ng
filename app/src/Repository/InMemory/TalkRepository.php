<?php

namespace Phpsw\Website\Repository\InMemory;

use Phpsw\Website\Entity\Talk;
use Phpsw\Website\Repository\TalkRepositoryInterface;

/**
 * In memory implementation of a TalkRepository.
 */
class TalkRepository extends AbstractRepository implements TalkRepositoryInterface
{
    /**
     * {@inheritdoc}
     */
    public function persist(Talk $talk)
    {
        $this->persistEntity($talk);
    }

    /**
     * {@inheritdoc}
     */
    public function getShowcaseTalks()
    {
        return array_filter($this->getAll(), function (Talk $talk) {
            return $talk->isShowcase();
        });
    }
}
