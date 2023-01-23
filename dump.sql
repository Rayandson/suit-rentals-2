--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: rentals; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.rentals (
    id integer NOT NULL,
    renter_name text NOT NULL,
    cpf character varying(11) NOT NULL,
    quantity integer NOT NULL,
    rental_date timestamp without time zone DEFAULT now() NOT NULL,
    return_date timestamp without time zone DEFAULT (now() + '3 days'::interval),
    is_returned boolean DEFAULT false
);


--
-- Name: rentals_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.rentals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: rentals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.rentals_id_seq OWNED BY public.rentals.id;


--
-- Name: rentals id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rentals ALTER COLUMN id SET DEFAULT nextval('public.rentals_id_seq'::regclass);


--
-- Data for Name: rentals; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.rentals VALUES (3, 'Rayandson', '11111111111', 2, '2023-01-22 16:35:23.866308', '2023-01-25 16:35:23.866308', false);
INSERT INTO public.rentals VALUES (2, 'Rafael', '22222222222', 1, '2023-01-22 14:13:21.609894', '2023-01-25 14:13:21.609894', true);
INSERT INTO public.rentals VALUES (4, 'Sandra', '3333333333', 3, '2023-01-22 22:17:36.975422', '2023-01-25 22:17:36.975422', false);
INSERT INTO public.rentals VALUES (5, 'Sandra', '33333333333', 3, '2023-01-22 22:20:57.741035', '2023-01-25 22:20:57.741035', false);


--
-- Name: rentals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.rentals_id_seq', 5, true);


--
-- Name: rentals rentals_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rentals
    ADD CONSTRAINT rentals_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

