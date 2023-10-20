// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Configurações → Navegação*
 */
export interface ConfiguracoesDocumentDataNavegacaoItem {
  /**
   * Link field in *Configurações → Navegação*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: configuracoes.navegacao[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Configurações → Navegação*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: configuracoes.navegacao[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Configurações documents
 */
interface ConfiguracoesDocumentData {
  /**
   * Titulo Site field in *Configurações*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: configuracoes.titulo_site
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_site: prismic.KeyTextField;

  /**
   * Meta Descrição field in *Configurações*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: configuracoes.meta_descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_descricao: prismic.KeyTextField;

  /**
   * Any imagem field in *Configurações*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: configuracoes.any_imagem
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  any_imagem: prismic.ImageField<never>;

  /**
   * Navegação field in *Configurações*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: configuracoes.navegacao[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navegacao: prismic.GroupField<
    Simplify<ConfiguracoesDocumentDataNavegacaoItem>
  >;
}

/**
 * Configurações document from Prismic
 *
 * - **API ID**: `configuracoes`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ConfiguracoesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ConfiguracoesDocumentData>,
    "configuracoes",
    Lang
  >;

export type AllDocumentTypes = ConfiguracoesDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ConfiguracoesDocument,
      ConfiguracoesDocumentData,
      ConfiguracoesDocumentDataNavegacaoItem,
      AllDocumentTypes,
    };
  }
}
