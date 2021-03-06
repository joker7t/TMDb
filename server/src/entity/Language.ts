// @ts-nocheck
import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { Movie } from './Movie';

@Entity()
export class Language {
    @PrimaryColumn()
    iso_639_1: string;

    @Column()
    id: string;

    @Column({ nullable: true })
    english_name: string;

    @Column({ nullable: true })
    name: string;

    @ManyToMany((type) => Movie, (movie) => movie.spoken_languages)
    movies: Movie[];
}
